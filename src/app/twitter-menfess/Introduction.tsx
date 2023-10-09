import Card from "@/commons/components/Card";

export default function Introduction({}) {
  const title = "Selamat datang di Menfess Cianjur! 👋";
  const text =
    "Mau curhat, kasih semangat, atau sekadar nyapa temen tanpa harus jelasin siapa kamu? Nah, kami punya solusinya: Menfess Cianjur, bot menfess eksklusif buat Cianjurian seperti kamu!";
  return <Card title={title} text={text} className="w-full" />;
}
