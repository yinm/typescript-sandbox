declare class TestA {}

declare let TestB: TestBConstructor
interface TestBConstructor {
  new(): TestB
}
interface TestB {}
