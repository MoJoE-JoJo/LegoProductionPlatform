using LegoProductionPlatform.Application.Equipment.Models;

namespace LegoProductionPlatform.Application.Equipment.Interfaces
{
    public interface IEquipmentService
    {
        public (List<EquipmentDto> equipments, List<EquipmentConnection> connections) GetEquipment();
    }
}
