declare class QEApplication {
  readonly project: QEProject
}

declare class QEProject {
  flushCache(): void;
  getActiveSequence(): QESequence | null
  getBinAt(index: number): QEProjectItemCollection;
  getSequenceAt(index: number): QESequence
  newSequence(name: string, presetPath: string): boolean
}

declare class QEProjectItemCollection {
  flushCache(): void;
  getBinAt(index: number): QEProjectItemCollection;
  getSequenceAt(index: number): QESequence;
  numBins: number;
  numSequences: number;
}

declare class QESequence {
  getVideoTrackAt(index: number): QETrack
  getAudioTrackAt(index: number): QETrack
  guid: string;
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
