/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  return { name, age, ticketId };
}
console.log(createVisitor("Imran Kudrna", 21, "ECMZR67C"));
/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}
console.log(
  revokeTicket({ name: "María Pilar Neri", age: 16, ticketId: null })
);
/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  switch (tickets[ticketId]) {
    case undefined:
      return "unknown ticket id";
    case null:
      return "not sold";
    default:
      return `sold to ${tickets[ticketId]}`;
  }
}
/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? "invalid ticket !!!";
}
/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  return visitor?.gtc?.version;
}
const visitor1 = {
  name: "Zohar Pekkanen",
  age: 28,
  ticketId: "8DGM3163",
  gtc: {
    signed: true,
    version: "4.2",
  },
};
const visitor2 = {
  name: "Fen Van der Hout",
  age: 70,
  ticketId: "BMYPNZGT",
  gtc: {
    signed: true,
    version: "1.6",
  },
};
console.log(gtcVersion(visitor1));
console.log(gtcVersion(visitor2));
