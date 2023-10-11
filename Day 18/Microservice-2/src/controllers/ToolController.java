package AdminPCA.controllers;

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

import AdminPCA.entities.ToolEntity;
import AdminPCA.services.ToolService;


@RestController
@RequestMapping("/tools")
public class ToolController 
{
	@Autowired
	ToolService ts;
	
	@GetMapping("/get")
	public List<ToolEntity> getToolDetails()
	{
		System.out.println("Enter Controller");
		return ts.getToolData();
	}
	
	@PostMapping("/post")
	public String postToolDetails(@RequestBody ToolEntity te)
	{
		ts.postToolData(te);
		return "Saved Successfully!";
	}
	
	@PutMapping("/put")
	public String putToolDetails(@RequestBody ToolEntity te, @RequestParam int id)
	{
		ts.putToolData(id, te);
		return "Updated Successfully!";
	}
	
	@DeleteMapping("/del")
	public String deleteToolDetails(@RequestParam int id)
	{
		ts.deleteToolData(id);
		return "Deleted Successfully!";
	}
}
