using LegoProductionPlatform.Application.Equipment.Interfaces;
using LegoProductionPlatform.Application.Equipment.Models;
using LegoProductionPlatform.Infrastructure;
using System.Linq;

namespace LegoProductionPlatform.Application.Equipment.Services
{
    public class EquipmentService(IEquipmentRepository equipmentRepo) : IEquipmentService
    {
        public (List<EquipmentDto> equipments, List<EquipmentConnection> connections) GetEquipment()
        {
            var equipmentGraph = equipmentRepo.GetEquipment();

            var equipments = equipmentGraph.Select(equipment => new EquipmentDto { Id = equipment.Id, Name= equipment.Name, State = equipment.State }).ToList();
            var connections = equipmentGraph
                .SelectMany(equipment => equipment.Successors.Select(successor => new EquipmentConnection { FromId = equipment.Id, ToId = successor.Id }))
                .ToList();

            return (equipments, connections);
        }
    }
}
