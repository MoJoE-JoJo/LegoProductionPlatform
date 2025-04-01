namespace LegoProductionPlatform.Models;
    public record Equipment
    {
        public int Id { get; init; }
        public string Name { get; init; }
        public State State { get; init; }
        public List<Equipment> Successors { get; init; } = new List<Equipment>(); // Could be a navigation property if using EF Core
    }


