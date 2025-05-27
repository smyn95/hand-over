import Image from 'next/image';

export default function Home() {
  const categoryData = [
    'New',
    'Best',
    '티켓/입장권',
    '수강권/이용권',
    '숙박/예약권',
    '체험/서비스권',
    '디지털 구독',
    '주차/교통권',
    '한정 기회/권한',
  ];

  const category = categoryData;

  return (
    <main>
      <section className="flex min-h-screen w-full flex-col items-center justify-between xl:w-[27%]">
        <Image
          src="/img_main.png"
          alt="banner"
          width={1920}
          height={1080}
          className="sticky top-4 left-0 -z-10 size-full"
        />
        <section className="bg-primaryWhite z-20 w-full xl:z-0">
          <div className="sticky top-0 left-0 z-50 w-full xl:hidden">
            <ul className="bg-primaryWhite flex h-[3.875rem] items-center gap-5 overflow-x-auto bg-white px-5 whitespace-nowrap after:absolute after:right-0 after:h-[60px] after:w-20 after:bg-[linear-gradient(270deg,#fff,hsla(0,0%,100%,0))] after:content-['']">
              {category.map((item, i) => (
                <li
                  key={i}
                  className="text-body2 font-bold whitespace-nowrap uppercase"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-20 inline-table h-[22.5rem] w-full bg-white"></div>
        </section>
      </section>
    </main>
  );
}
