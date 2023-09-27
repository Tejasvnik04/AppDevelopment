package PlantsCareAssistant.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import PlantsCareAssistant.entities.PlantEntity;
import PlantsCareAssistant.services.PlantService;

@RestController
public class PlantController 
{
	@Autowired
	PlantService ps;
	
	@PostMapping("/post")
	public String postPlantDetails(@RequestBody PlantEntity pe)
	{
		ps.postPlantData(pe);
		return "Saved...!";
	}
	
	@GetMapping("/get")
	public List<PlantEntity> getPlantDetails()
	{
		return ps.getPlantData();
	}
	
	@DeleteMapping("/del/{id}")
	public String deletePlantDetails(@PathVariable long id)
	{
		ps.deletePlantData(id);
		return "Deleted...!";
	}
	
	@PutMapping("/put")
	public String updatePlantDetails(@RequestParam long id, @RequestBody PlantEntity pe1)
	{
		ps.updatePlantData(id,pe1);
		return "Updated Successfully...!";
	}
	
//	s
	
	@GetMapping("/getById")
	public Optional<PlantEntity> getPlantDetailsById(@RequestParam long id)
	{
		return ps.getPlantById(id);
	}
	
	@GetMapping("/getByName")
	public List<PlantEntity> getPlantDetailsByName(@RequestParam String name)
	{
		return ps.getPlantByName(name);
	}
	
	@GetMapping("/getByLoc")
	public List<PlantEntity> getPlantDetailsByLoc(@RequestParam String loc)
	{
		return ps.getPlantByLoc(loc);
	}
	
}
