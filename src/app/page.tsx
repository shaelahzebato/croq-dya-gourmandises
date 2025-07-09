export default function Home() {
  return (
    <div className="bg-cream min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-rose-bonbon font-dancing text-6xl font-bold mb-4">
          {"Croq'Dya Gourmandises"}
        </h1>
        <p className="text-chocolat font-quicksand text-xl">
          Tailwind fonctionne ! ✨
        </p>
        <div className="mt-8">
          <div className="text-4xl animate-float-1">🧁</div>
        </div>
        <button className="text-cream border-chocolat border bg-rose-bonbon px-4 py-2 rounded-2xl mt-8">Dyaaa !</button>
      </div>
    </div>
  );
}