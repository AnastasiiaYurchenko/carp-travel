import navs from './navs.json';

export default function Home() {
  return (
    <main>
      <ul>
        {navs.map((item) => {
          return (
            <li key={item.id} className="text-3xl">
              {item.nav}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
