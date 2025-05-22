import { PATH } from '@/config/path';

import NextLink from '../ui/Link';

function Title({ title }: { title: string }) {
  return <h3 className="text-[24px] font-bold">{title}</h3>;
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-5 pt-10">
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <NextLink
            href={PATH.HOME}
            className="mb-4 flex items-center space-x-2"
          >
            <Title title="양도마켓" />
          </NextLink>
          <p className="text-sm text-gray-600">
            환불 불가 또는 시간제한이 있는 상품/서비스를 타인에게 양도하고,
            중고가로 거래할 수 있는 플랫폼
          </p>
        </div>

        <div className="flex gap-5 md:justify-self-end">
          <article>
            <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase">
              카테고리
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                { label: '티켓/입장권', path: PATH.TICKETS },
                { label: '수강권/이용권', path: PATH.CLASSES },
                { label: '숙박/예약권', path: PATH.ACCOMMODATIONS },
                { label: '체험/서비스권', path: PATH.EXPERIENCES },
                { label: '디지털 구독', path: PATH.SUBSCRIPTIONS },
              ].map(({ label, path }) => (
                <li key={label}>
                  <NextLink href={path} className="hover:text-brand-500">
                    {label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </article>

          <article>
            <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase">
              고객 지원
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <NextLink href={PATH.CONTACT} className="hover:text-brand-500">
                  고객센터
                </NextLink>
              </li>
              <li>
                <NextLink href={PATH.HELP} className="hover:text-brand-500">
                  이용 가이드
                </NextLink>
              </li>
              <li>
                <a
                  href="mailto:support@yangdo.com"
                  className="hover:text-brand-500"
                >
                  이메일 문의
                </a>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <div className="mt-8 border-t border-gray-200 py-6">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} 양도마켓. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
