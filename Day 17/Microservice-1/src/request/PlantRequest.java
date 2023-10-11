package PlantsCareAssistant.request;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlantRequest 
{
	private Integer id;
	private String plantName;
	private String plantType;
	private String room;
	private String watering;
	private String sunlight;
}
