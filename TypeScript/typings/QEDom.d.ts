declare class QEApplication {
  readonly project: QEProject
}

declare class QEProjectItemContainer {
  flushCache(): void;
  getBinAt(index: number): QEProjectItemContainer;
  getSequenceAt(index: number): QESequence;
  name: string;
  numBins: number;
  numSequences: number;
  numSequenceItems: number;
}

declare class QEProject extends QEProjectItemContainer {
  getActiveSequence(): QESequence | null;
  newSequence(name: string, presetPath: string): boolean;
}

declare class QESequence {
  audioFrameRate: number;
  CTI: {
    ticks: string;
    secs: number;
  };
  getVideoTrackAt(index: number): QETrack
  getAudioTrackAt(index: number): QETrack
  guid: string;
  name: string;
  videoFrameRate: number;
  workInPoint: {
    timecode: string;
  };
  workOutPoint: {
    timecode: string;
  };
}

declare class QETrack {
  razor(timecode: string): boolean
  type: MediaType
  numItems: number
  getItemAt(index: number): QETrackItem
}

declare class QETrackItem {
  start: QETime
  end: QETime
  type: 'Video' | 'Audio' | 'Empty'
  remove(): void
}

declare class QETime {
  secs: number
  frames: number
  ticks: string
  timecode: string
}
