using System.Xml.Linq;
using LegoProductionPlatform.Application.Equipment.Interfaces;
using LegoProductionPlatform.Models;

namespace LegoProductionPlatform.Infrastructure
{
    public class EquipmentRepository : IEquipmentRepository
    {
        // The content of this method is a mock to have some data
        public List<Equipment> GetEquipment() // The content of this method is a mock to have some data
        {
            var eq1 = new Equipment { Id=1, Name="Equipment 1", State=State.Running};
            var eq2 = new Equipment { Id = 2, Name = "Equipment 2", State = State.Starting };
            var eq3 = new Equipment { Id = 3, Name = "Equipment 3", State = State.Stopping };
            var eq4 = new Equipment { Id = 4, Name = "Equipment 4", State = State.Stopped };
            var eq5 = new Equipment { Id = 5, Name = "Equipment 5", State = State.Error };
            var eq6 = new Equipment { Id = 6, Name = "Equipment 6", State = State.Running };
            var eq7 = new Equipment { Id = 7, Name = "Equipment 7", State = State.Running };
            var eq8 = new Equipment { Id = 8, Name = "Equipment 8", State = State.Running };
            var eq9 = new Equipment { Id = 9, Name = "Equipment 9", State = State.Running };
            var eq10 = new Equipment { Id = 10, Name = "Equipment 10", State = State.Running };


            eq1.Successors.Add(eq2);
            eq1.Successors.Add(eq3);
            eq2.Successors.Add(eq4);
            eq2.Successors.Add(eq5);
            eq3.Successors.Add(eq6);
            eq3.Successors.Add(eq7);
            eq4.Successors.Add(eq8);
            eq5.Successors.Add(eq9);
            eq6.Successors.Add(eq10);

            return [eq1, eq2, eq3, eq4, eq5, eq6, eq7, eq8, eq9, eq10];

        }
    }
}
