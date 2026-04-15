"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Howl } from "howler";

type AudioContextValue = {
  isMusicOn: boolean;
  isNarrationOn: boolean;
  musicVolume: number;
  narrationVolume: number;
  isMusicMuted: boolean;
  isNarrationMuted: boolean;
  toggleMusic: () => void;
  toggleNarration: () => void;
  setMusicVolume: (value: number) => void;
  setNarrationVolume: (value: number) => void;
  toggleMusicMute: () => void;
  toggleNarrationMute: () => void;
  setActiveNarrationSource: (source?: string) => void;
};

const AudioContext = createContext<AudioContextValue | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const musicRef = useRef<Howl | null>(null);
  const narrationRef = useRef<Howl | null>(null);

  const [isMusicOn, setMusicOn] = useState(false);
  const [isNarrationOn, setNarrationOn] = useState(false);
  const [musicVolume, setMusicVolumeState] = useState(0.12);
  const [narrationVolume, setNarrationVolumeState] = useState(0.12);
  const [isMusicMuted, setMusicMuted] = useState(false);
  const [isNarrationMuted, setNarrationMuted] = useState(false);
  const [activeNarrationSource, setActiveNarrationSourceState] = useState<string | undefined>();

  const ensureMusic = useCallback(() => {
    if (!musicRef.current) {
      musicRef.current = new Howl({
        src: ["/audio/ambient.mp3"],
        loop: true,
        volume: 0,
        html5: true,
      });
    }
    return musicRef.current;
  }, []);

  const setMusicVolume = useCallback((value: number) => {
    const safe = Math.max(0.1, Math.min(value, 0.2));
    setMusicVolumeState(safe);
    if (musicRef.current && isMusicOn) {
      const target = isMusicMuted ? 0 : safe;
      musicRef.current.fade(musicRef.current.volume(), target, 800);
    }
  }, [isMusicMuted, isMusicOn]);

  const setNarrationVolume = useCallback((value: number) => {
    const safe = Math.max(0.1, Math.min(value, 0.2));
    setNarrationVolumeState(safe);
    if (narrationRef.current) {
      const target = isNarrationMuted ? 0 : safe;
      narrationRef.current.fade(narrationRef.current.volume(), target, 700);
    }
  }, [isNarrationMuted]);

  const toggleMusic = useCallback(() => {
    setMusicOn((prev) => {
      const next = !prev;
      const sound = ensureMusic();
      if (next) {
        if (!sound.playing()) {
          sound.play();
        }
        sound.fade(sound.volume(), isMusicMuted ? 0 : musicVolume, 1800);
      } else {
        sound.fade(sound.volume(), 0, 1800);
        window.setTimeout(() => {
          if (sound.playing()) {
            sound.stop();
          }
        }, 1900);
      }
      return next;
    });
  }, [ensureMusic, isMusicMuted, musicVolume]);

  const toggleNarration = useCallback(() => {
    setNarrationOn((prev) => !prev);
  }, []);

  const toggleMusicMute = useCallback(() => {
    setMusicMuted((prev) => {
      const next = !prev;
      if (musicRef.current && isMusicOn) {
        musicRef.current.fade(musicRef.current.volume(), next ? 0 : musicVolume, 700);
      }
      return next;
    });
  }, [isMusicOn, musicVolume]);

  const toggleNarrationMute = useCallback(() => {
    setNarrationMuted((prev) => {
      const next = !prev;
      if (narrationRef.current) {
        narrationRef.current.fade(narrationRef.current.volume(), next ? 0 : narrationVolume, 700);
      }
      return next;
    });
  }, [narrationVolume]);

  const setActiveNarrationSource = useCallback((source?: string) => {
    setActiveNarrationSourceState(source);
  }, []);

  useEffect(() => {
    if (!isNarrationOn || !activeNarrationSource) {
      if (narrationRef.current && narrationRef.current.playing()) {
        const current = narrationRef.current;
        current.fade(current.volume(), 0, 900);
        window.setTimeout(() => {
          if (current.playing()) {
            current.stop();
          }
        }, 950);
      }
      return;
    }

    if (narrationRef.current && narrationRef.current.playing()) {
      narrationRef.current.stop();
    }

    narrationRef.current = new Howl({
      src: [activeNarrationSource],
      volume: 0,
      html5: true,
    });

    const narration = narrationRef.current;
    narration.play();
    narration.fade(0, isNarrationMuted ? 0 : narrationVolume, 1500);

    return () => {
      if (narration.playing()) {
        narration.stop();
      }
    };
  }, [activeNarrationSource, isNarrationMuted, isNarrationOn, narrationVolume]);

  const value = useMemo(
    () => ({
      isMusicOn,
      isNarrationOn,
      musicVolume,
      narrationVolume,
      isMusicMuted,
      isNarrationMuted,
      toggleMusic,
      toggleNarration,
      setMusicVolume,
      setNarrationVolume,
      toggleMusicMute,
      toggleNarrationMute,
      setActiveNarrationSource,
    }),
    [
      isMusicOn,
      isNarrationOn,
      musicVolume,
      narrationVolume,
      isMusicMuted,
      isNarrationMuted,
      toggleMusic,
      toggleNarration,
      setMusicVolume,
      setNarrationVolume,
      toggleMusicMute,
      toggleNarrationMute,
      setActiveNarrationSource,
    ],
  );

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used inside AudioProvider");
  }
  return context;
}
