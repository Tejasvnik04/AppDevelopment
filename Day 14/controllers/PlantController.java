package PlantsCareAssistant.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import PlantsCareAssistant.entities.PlantEntity;
import PlantsCareAssistant.services.PlantService;

@RestController
@RequestMapping("/api/plants")
@CrossOrigin(origins = "http://localhost:80")
public class PlantController {
	
	@Autowired
	PlantService ps;
	@GetMapping("/get")
	public List<PlantEntity>getAllPlants()
	{
		return ps.getPlants();
	}
	
	@PostMapping("/post")
	public String SaveAllData(@RequestBody PlantEntity p)
	{
		ps.SaveData(p);
		return "Successful....!";
		
	}
	@PutMapping("/put")
	public String UpdateAllData(@RequestParam int id, @RequestBody PlantEntity p)
	{
		ps.updateData(id, p);
		return "Successful....!";
	}
	@DeleteMapping("/delete")
	public void DeleteDataById(@RequestParam int id)
	{
		ps.deleteData(id);
	}

}
