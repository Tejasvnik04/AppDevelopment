package AdminPCA.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import AdminPCA.entities.ToolEntity;
import AdminPCA.repositories.ToolRepo;


@Service
public class ToolService 
{
	@Autowired
	ToolRepo tr;
	
	public List<ToolEntity> getToolData()
	{
		return tr.findAll();
	}
	public void postToolData(ToolEntity te)
	{
		tr.save(te);
	}
	public void putToolData(int id, ToolEntity te1)
	{
		ToolEntity te2 = tr.findById(id).get();
		te2.setToolId(te1.getToolId());
		te2.setToolName(te1.getToolName());
		te2.setToolDesc(te1.getToolDesc());
		te2.setPrice(te1.getPrice());
		tr.save(te2);
	}
	public void deleteToolData(int id)
	{
		tr.deleteById(id);
	}
}
