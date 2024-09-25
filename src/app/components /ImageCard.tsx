import React from 'react'
import Image from 'next/image';

interface CardProps{
  image: string;
}

const ImageCard: React.FC<CardProps> = ({image}) =>{
  return <div className='relative overflow-hidden bg-white min-w-[150px] h-[70px] px-4 py-0 flex items-center justify-center rounded-[10px]'>
      <Image src={image} alt={image} width={165} height={30} />
  </div>
}

export default ImageCard;