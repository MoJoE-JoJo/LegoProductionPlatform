namespace LegoProductionPlatform.Application.Equipment.Models
{
    public record EquipmentConnection
    {
        public int FromId { get; init; }
        public int ToId { get; init; }
    }
}
