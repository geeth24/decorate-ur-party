import Image from 'next/image';
import React from 'react';

function Page() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <Image
        src="/Decorate Ur Party Final Logo 1x1.png"
        alt="Decorate Ur Party Logo"
        width={500}
        height={500}
      />
    </div>
  );
}

export default Page;
