package PlantsCareAssistant.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import PlantsCareAssistant.entities.PlantEntity;
import PlantsCareAssistant.repositories.PlantRepo;

@Service
public class PlantService 
{
	@Autowired
	PlantRepo pr;

	public void postPlantData(PlantEntity pe) 
	{
		pr.save(pe);
	}

	public List<PlantEntity> getPlantData() 
	{
		return pr.findAll();	
	}
	public void deletePlantData(long id)
	{
		pr.deleteById(id);
	}

	public void updatePlantData(long id, PlantEntity pe1) 
	{
		PlantEntity pe2 = pr.findById(id).get();
		pe2.setId(pe1.getId());
		pe2.setName(pe1.getName());
		pe2.setType(pe1.getType());
		pe2.setLoc(pe1.getLoc());
		pr.save(pe2);
	}
	
	public List<PlantEntity> getPlantByName(String name)
	{
		return pr.findByName(name);
	}
	
	public Optional<PlantEntity> getPlantById(long id)
	{
		return pr.findById(id);
	}
	public List<PlantEntity> getPlantByLoc(String loc)
	{
		return pr.findByLoc(loc);
	}
	
}
