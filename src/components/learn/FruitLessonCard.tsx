import Link from "next/link";
import { getFlavor } from "@/data/flavors";
import type { FruitLesson } from "@/data/learn";
import { FlavorImage } from "@/components/flavors/FlavorImage";
import { ArrowRightIcon } from "@/components/ui/icons";

export function FruitLessonCard({ lesson }: { lesson: FruitLesson }) {
  const flavor = getFlavor(lesson.slug);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-white">
      {flavor ? (
        <div
          className="relative aspect-[3/2] overflow-hidden"
          style={{ backgroundColor: `${flavor.accent}22` }}
        >
          <FlavorImage flavor={flavor} />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
          {lesson.family}
        </p>
        <h3 className="mt-1 text-lg font-bold text-green-deep">{lesson.fruitName}</h3>
        <dl className="info-copy mt-3 space-y-2">
          <div>
            <dt className="font-semibold text-green-deep">Plant part</dt>
            <dd className="text-muted">{lesson.plantPart}</dd>
          </div>
          <div>
            <dt className="font-semibold text-green-deep">Typical origin</dt>
            <dd className="text-muted">{lesson.typicalOrigin}</dd>
          </div>
          <div>
            <dt className="font-semibold text-green-deep">Classroom fact</dt>
            <dd className="text-muted">{lesson.classroomFact}</dd>
          </div>
          <div>
            <dt className="font-semibold text-green-deep">Try this</dt>
            <dd className="text-muted">{lesson.tryThis}</dd>
          </div>
        </dl>
        {flavor ? (
          <Link
            href={`/flavors/${flavor.slug}`}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 hover:text-green-700"
          >
            See the {flavor.name} flavor
            <ArrowRightIcon width={16} height={16} />
          </Link>
        ) : null}
      </div>
    </article>
  );
}
