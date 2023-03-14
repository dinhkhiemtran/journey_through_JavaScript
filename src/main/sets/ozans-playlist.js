// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.
/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  return (playlist = [...new Set(playlist)]);
}
const playlist = [
  "Court and Spark - Joni Mitchell",
  "Big Yellow Taxi - Joni Mitchell",
  "Court and Spark - Joni Mitchell",
];
const removed = removeDuplicates(playlist);
console.log(removed);
/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  // for (let i = 0 ; i < playlist.length; i++) {
  //     if (playlist[i] === track) {
  //         return true;
  //     }
  // }
  // return false;
  return playlist.some((e) => (e === track ? true : false));
}
const playlist1 = [
  "The Fashion Show - Grace Jones",
  "Dr. Funkenstein - Parliament",
];
const isTrack1 = hasTrack(playlist1, "Dr. Funkenstein - Parliament");
//=> true
console.log(isTrack1);
const isTrack2 = hasTrack(playlist1, "Walking in the Rain - Grace Jones");
//=> false
console.log(isTrack2);
/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  playlist.push(track);
  return playlist;
}
const playlist2 = ["Selma - Bijelo Dugme"];
const newList1 = addTrack(playlist2, "Atomic Dog - George Clinton");
//=> ['Selma - Bijelo Dugme', 'Atomic Dog - George Clinton']
console.log(newList1);
const newList2 = addTrack(playlist2, "Selma - Bijelo Dugme");
console.log(newList2);
/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const set = new Set(playlist);
  set.delete(track);
  return [...set];
}
const playlist3 = [
  "The Treasure - Fra Lippo Lippi",
  "After the Fall - Klaus Nomi",
];
const specified1 = deleteTrack(playlist3, "The Treasure - Fra Lippo Lippi");
//=> ['After the Fall - Klaus Nomi']
console.log(specified1);
const specified2 = deleteTrack(
  playlist3,
  "I Feel the Magic - Belinda Carlisle"
);
//=> ['After the Fall - Klaus Nomi']
console.log(specified2);
/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const artistSet = new Set(playlist.map((track) => track.split(" - ")[1]));
  return [...artistSet];
}
