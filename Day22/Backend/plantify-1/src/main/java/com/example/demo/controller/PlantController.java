package com.example.demo.controller;

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

import com.example.demo.model.PlantEntity;
import com.example.demo.service.PlantService;

@RestController
@RequestMapping("/api/plants")
@CrossOrigin(origins = "http://localhost:3000")
public class PlantController {
	
	@Autowired
	PlantService ps;
	
	@GetMapping("/get")
	public List<PlantEntity>getAllPlants()
	{
		return ps.getPlants();
	}
	
	@PostMapping("/post")
	public void SaveAllData(@RequestBody PlantEntity p)
	{
		ps.SaveData(p);
	}
	@PutMapping("/put")
	public void UpdateAllData(PlantEntity p)
	{
		ps.updateData(p);
	}
	@DeleteMapping("/delete")
	public void DeleteDataById(@RequestParam int id)
	{
		ps.deleteData(id);
	}

}
