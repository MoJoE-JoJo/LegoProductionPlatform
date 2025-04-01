using LegoProductionPlatform.Models;

namespace LegoProductionPlatform.Application.Equipment.Interfaces;
    public interface IEquipmentRepository
    {

        public List<LegoProductionPlatform.Models.Equipment> GetEquipment();
    }
