package AdminPCA.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Tools")
public class ToolEntity 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int toolId;
	@Column(name = "ToolName")
	String toolName;
	@Column(name = "ToolDescription")
	String toolDesc;
	@Column(name = "Price")
	int price;
	public int getToolId() {
		return toolId;
	}
	public void setToolId(int toolId) {
		this.toolId = toolId;
	}
	public String getToolName() {
		return toolName;
	}
	public void setToolName(String toolName) {
		this.toolName = toolName;
	}
	public String getToolDesc() {
		return toolDesc;
	}
	public void setToolDesc(String toolDesc) {
		this.toolDesc = toolDesc;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
}
