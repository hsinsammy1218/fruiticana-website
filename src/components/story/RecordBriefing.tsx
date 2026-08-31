import { HistoricalNotice } from "@/components/ui/HistoricalNotice";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { appendixIndex, historicalRecord, recordFacts } from "@/data/record";

export function RecordBriefing() {
  return (
    <div>
      <SectionHeading
        eyebrow="Historical business record"
        title="Information from the 2003–2011 documentation"
        description="These figures and notes are transcribed from Fruiticana’s original business record so school and food-service readers can evaluate the product on documented evidence — not parlor marketing."
      />
      <HistoricalNotice className="mt-6 max-w-3xl">
        {historicalRecord.citation} {historicalRecord.howToUse}
      </HistoricalNotice>

      <ul className="mt-10 grid gap-4 lg:grid-cols-2">
        {recordFacts.map((fact) => (
          <li
            key={fact.label}
            className="reveal rounded-xl2 border border-line bg-white p-6"
          >
            <p className="font-display text-3xl font-extrabold tabular-nums tracking-tight text-green-deep">
              {fact.figure}
            </p>
            <h3 className="mt-2 text-lg font-bold text-green-deep">{fact.label}</h3>
            <p className="info-copy mt-2">
              <span className="font-semibold text-green-deep">From the record: </span>
              {fact.fromRecord}
            </p>
            <p className="info-copy mt-3 border-t border-line pt-3">
              <span className="font-semibold text-green-deep">How to use it: </span>
              {fact.howToUse}
            </p>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 text-xl font-bold text-green-deep">
        Appendix index (scans, pp. {historicalRecord.appendixPages})
      </h3>
      <p className="info-copy mt-2 max-w-3xl">
        The source file’s appendix is a set of scanned letters, labels, and lab
        panels. Rights-cleared downloads are not published here. The table below
        is the usable index for a school evaluation.
      </p>
      <div className="mt-6 overflow-x-auto rounded-xl2 border border-line bg-white">
        <table className="w-full min-w-[36rem] text-left text-base">
          <caption className="sr-only">
            Index of appendix materials in Fruiticana’s 2003–2011 business record
          </caption>
          <thead className="bg-cream-100 text-sm font-semibold uppercase tracking-wide text-green-deep">
            <tr>
              <th scope="col" className="px-5 py-3">
                Material
              </th>
              <th scope="col" className="px-5 py-3">
                Where in the record
              </th>
              <th scope="col" className="px-5 py-3">
                Dated
              </th>
              <th scope="col" className="px-5 py-3">
                How to read it
              </th>
            </tr>
          </thead>
          <tbody>
            {appendixIndex.map((item) => (
              <tr key={item.title} className="border-t border-line align-top">
                <th scope="row" className="px-5 py-4 font-semibold text-green-deep">
                  {item.title}
                </th>
                <td className="px-5 py-4 text-muted">{item.location}</td>
                <td className="px-5 py-4 text-muted">{item.period}</td>
                <td className="px-5 py-4 text-muted">{item.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
