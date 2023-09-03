export const alt = "Deutschland Ticket";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/jpeg";

export default function Image() {
  const imagePath = "./opengraph-image.jpeg";
  return new Response(imagePath, { headers: { "Content-Type": "image/jpeg" } });
}
