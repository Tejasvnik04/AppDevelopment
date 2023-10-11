package AdminPCA.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import AdminPCA.entities.DiseaseEntity;
import AdminPCA.services.DiseaseService;


public class DiseaseController 
{
	@Autowired
	DiseaseService ts;
	
	@GetMapping("/get")
	public List<DiseaseEntity> getDiseaseDetails()
	{
		return ts.getDiseaseData();
	}
	
	@PostMapping("/post")
	public String postDiseaseDetails(@RequestBody DiseaseEntity te)
	{
		ts.postDiseaseData(te);
		return "Saved Successfully!";
	}
	
	
	@PutMapping("/put")
	public String putDiseaseDetails(@RequestBody DiseaseEntity te, @RequestParam int id)
	{
		ts.putDiseaseData(id, te);
		return "Updated Successfully!";
	}
	
	@DeleteMapping("/del")
	public String deleteDiseaseDetails(@RequestParam int id)
	{
		ts.deleteDiseaseData(id);
		return "Deleted Successfully!";
	}

}
