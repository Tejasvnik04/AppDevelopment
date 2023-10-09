package PlantsCareAssistant.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import PlantsCareAssistant.entities.PlantEntity;
import PlantsCareAssistant.repositories.PlantRepo;

@Service
public class PlantService {

	@Autowired
	PlantRepo pr;
	
	public List<PlantEntity> getPlants()
	{
		return pr.findAll();
	}
	
	public void SaveData(PlantEntity p)
	{
		pr.save(p);
	}
	public void updateData(int id, PlantEntity pe1) 
	{
		PlantEntity pe2 = pr.findById(id).get();
		pe2.setId(pe1.getId());
		pe2.setPlantName(pe1.getPlantName());
		pe2.setPlantType(pe1.getPlantType());
		pe2.setRoom(pe1.getRoom());
		pe2.setSunlight(pe1.getSunlight());
		pe2.setWatering(pe1.getWatering());
		pr.save(pe2);
	}

	public void deleteData(@RequestParam int id) {
		pr.deleteById(id);
		
	}
}
