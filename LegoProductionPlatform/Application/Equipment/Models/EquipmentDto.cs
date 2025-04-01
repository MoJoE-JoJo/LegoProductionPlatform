using LegoProductionPlatform.Models;

namespace LegoProductionPlatform.Application.Equipment.Models
{
    public record EquipmentDto
    {
        public int Id { get; init; }
        public string Name { get; init; }
        public State State { get; init; }
    }
}
