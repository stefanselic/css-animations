/** @format */

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href={'./transitions'}>Transitions</Link>
      <br />
      <Link href={'./2d-transforms'}>2D - Transforms</Link>
      <br />
      <Link href={'./3d-transforms'}>3D - Transforms</Link>
      <br />
      <Link href={'./creative-buttons'}>Creative Buttons</Link>
      <br />
      <Link href={'./creative-images'}>Creative Images</Link>
      <br />
      <Link href={'./creative-menus'}>Creative Menus</Link>
      <br />
      <Link href={'./creative-cards'}>Creative Cards</Link>
      <br />
      <Link href={'./creative-examples'}>Creative Examples</Link>
    </main>
  );
}
