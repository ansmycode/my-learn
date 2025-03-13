import { HomeDescList } from "@/common/common";

const about = () => {
  return (
    <div className="pt-10 pl-18 pr-18 ">
      {/* 项目介绍 - What? Why? Worth? How?*/}
      <section className="max-w-6xl mx-auto px-4 pt-2">
        {HomeDescList.map((item) => {
          return (
            <div
              key={item.title}
              className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-20"
            >
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black/10 text-5xl pointer-events-none whitespace-nowrap">
                {item.title}
              </h2>
              <div>
                {item.QandA.map((QA: any, index: number) => {
                  return (
                    <div key={QA.questions} className="mb-6">
                      <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
                        {QA.questions}
                      </h3>
                      <div>{QA.answers}</div>
                      {index + 1 === item.QandA.length ? null : (
                        <div className="my-8">
                          <hr className="border-t border-gray-100" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default about;
