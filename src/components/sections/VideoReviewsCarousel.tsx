"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { VIDEO_TESTIMONIALS } from "@/lib/content";
import type { TranscriptSegment } from "@/lib/video-transcripts";
import { useLang } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/cn";

function formatTime(seconds: number) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
}

interface VideoTranscriptProps {
    segments: TranscriptSegment[];
    currentTime: number;
    expanded: boolean;
    onToggle: () => void;
    onSeek: (time: number) => void;
}

function VideoTranscript({ segments, currentTime, expanded, onToggle, onSeek }: VideoTranscriptProps) {
    const { tr } = useLang();
    const listRef = useRef<HTMLOListElement>(null);
    const activeIndex = segments.findIndex((seg) => currentTime >= seg.start && currentTime < seg.end);

    // keep the line being spoken visible without scrolling the whole page
    useEffect(() => {
        const list = listRef.current;
        if (!expanded || !list || activeIndex < 0) return;
        const item = list.children[activeIndex] as HTMLElement | undefined;
        if (!item) return;
        if (item.offsetTop < list.scrollTop || item.offsetTop + item.offsetHeight > list.scrollTop + list.clientHeight) {
            list.scrollTo({ top: item.offsetTop - 8, behavior: "smooth" });
        }
    }, [activeIndex, expanded]);

    if (segments.length === 0) return null;

    return (
        <div className="border-t border-border">
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={expanded}
                className="flex w-full items-center justify-between gap-2 px-5 py-3.5 text-left text-sm font-semibold text-primary transition-colors hover:bg-soft/60"
            >
                {expanded
                    ? tr({ kk: "Мәтінді жасыру", ru: "Скрыть текст видео", en: "Hide transcript" })
                    : tr({ kk: "Бейненің мәтіні", ru: "Текст видео", en: "Video transcript" })}
                <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={cn("shrink-0 transition-transform duration-200", expanded && "rotate-180")}
                />
            </button>
            {expanded && (
                <ol ref={listRef} className="relative max-h-60 overflow-y-auto px-3 pb-3">
                    {segments.map((seg, i) => (
                        <li key={seg.start}>
                            <button
                                type="button"
                                onClick={() => onSeek(seg.start)}
                                aria-current={i === activeIndex ? "true" : undefined}
                                className={cn(
                                    "flex w-full gap-2.5 rounded-xl px-2 py-1.5 text-left text-[13.5px] leading-relaxed transition-colors",
                                    i === activeIndex
                                        ? "bg-primary/10 font-medium text-ink"
                                        : "text-ink/65 hover:bg-soft/60"
                                )}
                            >
                                <span className="mt-[3px] shrink-0 font-mono text-[11px] tabular-nums text-primary/70">
                                    {formatTime(seg.start)}
                                </span>
                                <span>{tr(seg.text)}</span>
                            </button>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
}

export function VideoReviewsCarousel() {
    const trackRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const [expanded, setExpanded] = useState<Record<number, boolean>>({});
    const [times, setTimes] = useState<Record<number, number>>({});
    const { tr } = useLang();
    const count = VIDEO_TESTIMONIALS.length;

    const scrollToIndex = useCallback(
        (index: number) => {
            const track = trackRef.current;
            if (!track) return;
            const clamped = Math.max(0, Math.min(index, count - 1));
            const card = track.children[clamped] as HTMLElement | undefined;
            if (card) {
                track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
            }
        },
        [count]
    );

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        let frame: number;
        const onScroll = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const children = Array.from(track.children) as HTMLElement[];
                let closest = 0;
                let closestDist = Infinity;
                children.forEach((child, i) => {
                    const dist = Math.abs(child.offsetLeft - track.offsetLeft - track.scrollLeft);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closest = i;
                    }
                });
                setActiveIndex(closest);
            });
        };
        track.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            track.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(frame);
        };
    }, []);

    const togglePlay = (index: number) => {
        const video = videoRefs.current[index];
        if (!video) return;

        // only one video plays at a time
        videoRefs.current.forEach((v, i) => {
            if (v && i !== index && !v.paused) v.pause();
        });

        if (video.paused) {
            video.play();
            setPlayingIndex(index);
            // opening a video also opens what is said in it
            setExpanded((cur) => ({ ...cur, [index]: true }));
        } else {
            video.pause();
            setPlayingIndex(null);
        }
    };

    const seekTo = (index: number, time: number) => {
        const video = videoRefs.current[index];
        if (!video) return;
        video.currentTime = time;
        setTimes((cur) => ({ ...cur, [index]: time }));
        if (video.paused) togglePlay(index);
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowRight") {
            e.preventDefault();
            scrollToIndex(activeIndex + 1);
        } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            scrollToIndex(activeIndex - 1);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-end gap-2 pb-5">
                <button
                    type="button"
                    onClick={() => scrollToIndex(activeIndex - 1)}
                    disabled={activeIndex === 0}
                    aria-label={tr({ kk: "Алдыңғы бейне", ru: "Предыдущее видео", en: "Previous video" })}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink transition-colors hover:border-primary hover:text-primary disabled:opacity-40"
                >
                    <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <button
                    type="button"
                    onClick={() => scrollToIndex(activeIndex + 1)}
                    disabled={activeIndex === count - 1}
                    aria-label={tr({ kk: "Келесі бейне", ru: "Следующее видео", en: "Next video" })}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink transition-colors hover:border-primary hover:text-primary disabled:opacity-40"
                >
                    <ChevronRight size={20} aria-hidden="true" />
                </button>
            </div>

            <div
                ref={trackRef}
                role="region"
                aria-label={tr({ kk: "Бейне пікірлер — слайдер", ru: "Видеоотзывы — слайдер", en: "Video reviews — slider" })}
                tabIndex={0}
                onKeyDown={onKeyDown}
                className="no-scrollbar flex items-start snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-5 pb-2"
            >
                {VIDEO_TESTIMONIALS.map((story, i) => (
                    <div
                        key={i}
                        role="group"
                        aria-label={tr({ kk: `${count} слайдтың ${i + 1}-і`, ru: `Слайд ${i + 1} из ${count}`, en: `Slide ${i + 1} of ${count}` })}
                        className="relative flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card sm:w-[320px]"
                    >
                        <div className="relative aspect-video bg-ink/5">
                            <video
                                ref={(el) => {
                                    videoRefs.current[i] = el;
                                }}
                                src={story.videoSrc}
                                poster={story.poster}
                                preload="none"
                                playsInline
                                controls={playingIndex === i}
                                onEnded={() => setPlayingIndex(null)}
                                onTimeUpdate={(e) => {
                                    const time = e.currentTarget.currentTime;
                                    setTimes((cur) => ({ ...cur, [i]: time }));
                                }}
                                onPause={() => setPlayingIndex((cur) => (cur === i ? null : cur))}
                                className="h-full w-full object-cover"
                            />
                            {playingIndex !== i && (
                                <button
                                    type="button"
                                    onClick={() => togglePlay(i)}
                                    aria-label={tr({ kk: "Бейне пікірді көру", ru: "Смотреть видео отзыв", en: "Watch video review" })}
                                    className="absolute inset-0 z-10 flex items-center justify-center bg-ink/10 transition-colors hover:bg-ink/20"
                                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-card">
                    <Play size={20} fill="currentColor" aria-hidden="true" />
                  </span>
                                </button>
                            )}
                        </div>
                        {(story.studentName || story.college || story.speciality) && (
                            <div className="p-5">
                                <p className="font-heading text-base font-bold text-ink">{story.studentName}</p>
                                <p className="mt-1 text-sm text-ink/55">{story.college}</p>
                                <p className="mt-3 text-[13px] font-semibold uppercase tracking-wide text-primary/70">
                                    {story.speciality}
                                </p>
                            </div>
                        )}
                        <VideoTranscript
                            segments={story.transcript}
                            currentTime={times[i] ?? -1}
                            expanded={!!expanded[i]}
                            onToggle={() => setExpanded((cur) => ({ ...cur, [i]: !cur[i] }))}
                            onSeek={(time) => seekTo(i, time)}
                        />
                    </div>
                ))}
            </div>

            <div className="mt-5 flex items-center justify-center gap-2" role="tablist" aria-label={tr({ kk: "Бейнелер бойынша навигация", ru: "Навигация по видео", en: "Video navigation" })}>
                {VIDEO_TESTIMONIALS.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        role="tab"
                        aria-selected={activeIndex === i}
                        aria-label={tr({ kk: `${i + 1}-слайдқа өту`, ru: `Перейти к слайду ${i + 1}`, en: `Go to slide ${i + 1}` })}
                        onClick={() => scrollToIndex(i)}
                        className={`h-2 rounded-full transition-all ${
                            activeIndex === i ? "w-6 bg-primary" : "w-2 bg-border"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}