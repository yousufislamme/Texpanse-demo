"use client"
import { useCaseConverter } from 'texpanse';
export default function Home() {
  const originalString = "Bangladesh";
  const colors = ['text-blue-500', 'text-purple-500', 'text-yellow-500'];

  const { convertedString, colorClasses } = useCaseConverter(originalString, colors);
  const renderConvertedString = (convertedString, colorClasses) => {
    const colorClassesArray = colorClasses.trim().split(' ');
    return convertedString.split('').map((char, index) => (
      <span key={index} className={colorClassesArray[index % colorClassesArray.length]}>{char}</span>
    ));
  };
  return (
    <main>
      <div className='flex justify-center items-center h-screen '>
        <h1 className='text-[2rem] lg:text-[4rem] border-2 border-sky-500 rounded-xl px-5 py-2 shadow-xl'> {renderConvertedString(convertedString, colorClasses)} </h1>
      </div>
    </main>
  );
}
