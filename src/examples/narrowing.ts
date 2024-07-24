type AllowedUUIDTypes = number | string; // | { uuid: 123 };

// Function lacks ending return statement and return type does not include 'undefined'

function normalizeUUID(uuid: AllowedUUIDTypes): string {
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
  id: string;
  name: string;
  tracks: Track[];
}
interface Track {
  id: string;
  name: string;
  duration_ms: number;
}
interface Episode {
  id: string;
  name: string;
  episode_no: number;
}
function showInfo(result: Playlist | Track | Episode) {
  return `${result.name} - 10 tracks`;
  return `${result.name} - 2.5 minutes`;
  return `${result.name} - #5 episode`;
}
