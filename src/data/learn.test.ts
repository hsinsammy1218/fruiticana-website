import { describe, expect, it } from "vitest";
import { flavorSlugs } from "@/data/flavors";
import {
  fruitLessons,
  getFruitLesson,
  learnModules,
  discussionPrompts,
  classroomActivities,
} from "@/data/learn";

describe("classroom learn content", () => {
  it("covers every original flavor with a fruit lesson", () => {
    expect(fruitLessons.map((lesson) => lesson.slug)).toEqual([...flavorSlugs]);
    for (const slug of flavorSlugs) {
      const lesson = getFruitLesson(slug);
      expect(lesson?.fruitName).toBeTruthy();
      expect(lesson?.classroomFact.length).toBeGreaterThan(40);
      expect(lesson?.tryThis.length).toBeGreaterThan(20);
    }
  });

  it("does not invent a lesson for unknown slugs", () => {
    expect(getFruitLesson("not-a-fruit")).toBeUndefined();
  });

  it("exposes five teaching modules with in-page anchors", () => {
    expect(learnModules.map((module) => module.id)).toEqual([
      "fruits",
      "science",
      "labels",
      "case-study",
      "classroom",
    ]);
  });

  it("includes grade-banded discussion prompts and grocery-store activities", () => {
    expect(discussionPrompts.map((prompt) => prompt.band)).toEqual([
      "elementary",
      "middle",
      "high",
    ]);
    expect(classroomActivities.length).toBeGreaterThanOrEqual(4);
    expect(
      classroomActivities.every((activity) =>
        /fruit|label|tasting|map/i.test(`${activity.title} ${activity.materials}`),
      ),
    ).toBe(true);
  });
});
