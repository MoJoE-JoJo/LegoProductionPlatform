using LegoProductionPlatform.Application.Equipment.Models;

namespace LegoProductionPlatform.Controllers.Models;
    public record GetEquipmentGraphResult(List<EquipmentDto> Equipments, List<EquipmentConnection> Connections);
    

