package PlantsCareAssistant.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import PlantsCareAssistant.entities.RewardsEntity;
import PlantsCareAssistant.repositories.RewardsRepo;


@Service
public class RewardsService 
{
	@Autowired
	RewardsRepo rr;
	
	public List<RewardsEntity> getRewards()
	{
		return rr.findAll();
	}
	
	public void SaveRData(RewardsEntity p)
	{
		rr.save(p);
	}
	public void updateRData(int id, RewardsEntity pe1) 
	{
		RewardsEntity pe2 = rr.findById(id).get();
		pe2.setId(pe1.getId());
		pe2.setNo_of_plants(pe1.getNo_of_plants());
		pe2.setNo_of_coins(pe1.getNo_of_coins());
		pe2.setNo_of_rewards(pe1.getNo_of_rewards());
		rr.save(pe2);
	}

	public void deleteRData(@RequestParam int id) {
		rr.deleteById(id);
		
	}
}
