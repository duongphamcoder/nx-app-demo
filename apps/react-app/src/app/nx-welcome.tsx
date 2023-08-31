/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

import { validates } from '@nx-app-demo/validates';

export function NxWelcome({ title }: { title: string }) {
  return (
    <>
      <h1>Hello Duong Pham</h1>
      <p>Currently, you use one lib is {validates()}</p>
    </>
  );
}

export default NxWelcome;
