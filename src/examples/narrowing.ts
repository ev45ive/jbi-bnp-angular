type AllowedUUIDTypes = number | string; // | { uuid: 123 };

// Function lacks ending return statement and return type does not include 'undefined'

function normalizeUUID(uuid: AllowedUUIDTypes): string {
  //   uuid.valueOf; //  string | number

  if (typeof uuid === 'number') {
    return uuid.toFixed(0); //  string
  }

  if (typeof uuid === 'string') {
    return uuid.toLowerCase();
  }

  assertExhaustiveness(uuid);
  //   const _unreachableCode = 123; // Unreachable code detected.
}

function assertExhaustiveness(uuid: never): never {
  throw new Error('Not valid uuid' + uuid);
}

const result1: string = normalizeUUID(123.0); /// '123'
const result2: string = normalizeUUID('BaNaNaNa Batman!'); // 'bananana batman!'

// ------

interface Playlist {
  type: 'playlist';
  id: string;
  name: string;
  tracks: Track[];
}
interface Track {
  type: 'track';
  id: string;
  name: string;
  duration_ms: number;
}
interface Episode {
  type: 'episode';
  id: string;
  name: string;
  episode_no: number;
  duration_ms: number;
}
const MS_IN_MINUTE = 1000 / 60;

type ResultTypes = Playlist | Track | Episode;

function showInfo2(result: ResultTypes) {
  switch (result.type) {
    case 'playlist': return `${result.name} - ${result.tracks.length} tracks`;
    case 'episode': return `${result.name} - episode #${result.episode_no} `;
    case 'track': return `${result.name} - ${result.duration_ms / MS_IN_MINUTE} min`;
    default: assertExhaustiveness(result);
  }
}

function showInfo(result: ResultTypes) {
  if ('tracks' in result) {
    return `${result.name} - ${result.tracks.length} tracks`;
  }
  if ('episode_no' in result) {
    return `${result.name} - episode #${result.episode_no} `;
  }
  if ('duration_ms' in result) {
    return `${result.name} - ${result.duration_ms / MS_IN_MINUTE} min`;
  }
  assertExhaustiveness(result);
}

// {
//     isBlue: true,
//     isRed: true,
//     isSquare: true
// }

// color:'blue'|'green'
