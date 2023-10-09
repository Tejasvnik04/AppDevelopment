package PlantsCareAssistant.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import PlantsCareAssistant.entities.RewardsEntity;
import PlantsCareAssistant.services.RewardsService;
@RequestMapping("/api/rewards")
@RestController
public class RewardsController 
{
	@Autowired
	RewardsService rs;
	@GetMapping("/getr")
	public List<RewardsEntity>getAllPlants()
	{
		return rs.getRewards();
	}
	
	@PostMapping("/postr")
	public String SaveAllData(@RequestBody RewardsEntity p)
	{
		rs.SaveRData(p);
		return "Successful....!";
		
	}
	@PutMapping("/putr")
	public String UpdateAllData(@RequestParam int id, @RequestBody RewardsEntity p)
	{
		rs.updateRData(id, p);
		return "Successful....!";
	}
	@DeleteMapping("/deleter")
	public void DeleteDataById(@RequestParam int id)
	{
		rs.deleteRData(id);
	}


}
