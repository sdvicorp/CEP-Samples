declare class QEApplication {
  readonly project: QEProject
}

declare class QEProjectItemCollection {
  flushCache(): void;
  getBinAt(index: number): QEProjectItemCollection;
  getSequenceAt(index: number): QESequence;
  numBins: number;
  numSequences: number;
}

declare class QEProject extends QEProjectItemCollection {
  getActiveSequence(): QESequence | null
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
