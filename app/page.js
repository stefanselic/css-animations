/** @format */

import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href={'./transitions'}>Transitions</Link>
      <br />
      <Link href={'./2d-transforms'}>2D - Transforms</Link>
      <br />
      <Link href={'./3d-transforms'}>3D - Transforms</Link>
    </main>
  );
}
