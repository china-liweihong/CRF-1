package app.serviceImpl;

import app.dto.MedicineLiverDiseaseHistoryDTO;
import app.dto.MedicineLiverDiseaseHistoryDetailDTO;
import app.entities.MedicineLiverDiseaseHistoryDO;
import app.entities.MedicineLiverDiseaseHistoryDetailDO;
import app.repo.MlDiseaseHistoryDetailRepo;
import app.repo.MlDiseaseHistoryRepo;
import app.service.MlCompleteService;
import app.service.MlDiseaseHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/9/4 0004.
 */

@Service
public class MlDiseaseHistoryServiceImpl implements MlDiseaseHistoryService ,MlCompleteService{

    @Autowired
    private MlDiseaseHistoryRepo mlDiseaseHistoryRepo;

    @Autowired
    private MlDiseaseHistoryDetailRepo mlDiseaseHistoryDetailRepo;

    private MedicineLiverDiseaseHistoryDO convertToEntity(MedicineLiverDiseaseHistoryDTO medicineLiverDiseaseHistoryDTO) {

        MedicineLiverDiseaseHistoryDO medicineLiverDiseaseHistoryDO = new MedicineLiverDiseaseHistoryDO();
        medicineLiverDiseaseHistoryDO.setPatientId(medicineLiverDiseaseHistoryDTO.getPatientId());
        medicineLiverDiseaseHistoryDO.setComplete(medicineLiverDiseaseHistoryDTO.isComplete());
        medicineLiverDiseaseHistoryDO.setOtherHistory(medicineLiverDiseaseHistoryDTO.getOtherHistory());
        medicineLiverDiseaseHistoryDO.setPastDisease(medicineLiverDiseaseHistoryDTO.getPastDisease());
        mlDiseaseHistoryDetailRepo.deleteDiseaseHistoryDetailByDId(medicineLiverDiseaseHistoryDTO.getId());
        List<MedicineLiverDiseaseHistoryDetailDO> medicineLiverDiseaseHistoryDetailDOS = new ArrayList<>();
        List<MedicineLiverDiseaseHistoryDetailDTO> medicineLiverDiseaseHistoryDetailDTOS = medicineLiverDiseaseHistoryDTO.getMedicineLiverDiseaseHistoryDetailDTOS();
        if (medicineLiverDiseaseHistoryDetailDTOS != null) {
            for (MedicineLiverDiseaseHistoryDetailDTO medicineLiverDiseaseHistoryDetailDTO : medicineLiverDiseaseHistoryDetailDTOS) {
                MedicineLiverDiseaseHistoryDetailDO medicineLiverDiseaseHistoryDetailDO = new MedicineLiverDiseaseHistoryDetailDO();
                medicineLiverDiseaseHistoryDetailDO.setDiagnosisDate(medicineLiverDiseaseHistoryDetailDTO.getDiagnosisDate());
                medicineLiverDiseaseHistoryDetailDO.setCrueDate(medicineLiverDiseaseHistoryDetailDTO.getCrueDate());
                medicineLiverDiseaseHistoryDetailDO.setDiseaseName(medicineLiverDiseaseHistoryDetailDTO.getDiseaseName());
                medicineLiverDiseaseHistoryDetailDO.setExistence(medicineLiverDiseaseHistoryDetailDTO.getExistence());
                medicineLiverDiseaseHistoryDetailDO.setMedicineLiverDiseaseHistoryDO(medicineLiverDiseaseHistoryDO);
                medicineLiverDiseaseHistoryDetailDOS.add(medicineLiverDiseaseHistoryDetailDO);
            }
        }
        medicineLiverDiseaseHistoryDO.setMedicineLiverDiseaseHistoryDetailDOS(medicineLiverDiseaseHistoryDetailDOS);
        return medicineLiverDiseaseHistoryDO;
    }

    private MedicineLiverDiseaseHistoryDTO convertToDTO(MedicineLiverDiseaseHistoryDO medicineLiverDiseaseHistoryDO) {

        MedicineLiverDiseaseHistoryDTO medicineLiverDiseaseHistoryDTO = new MedicineLiverDiseaseHistoryDTO();
        medicineLiverDiseaseHistoryDTO.setComplete(medicineLiverDiseaseHistoryDO.isComplete());
        medicineLiverDiseaseHistoryDTO.setOtherHistory(medicineLiverDiseaseHistoryDO.getOtherHistory());
        medicineLiverDiseaseHistoryDTO.setPastDisease(medicineLiverDiseaseHistoryDO.getPastDisease());
        medicineLiverDiseaseHistoryDTO.setPatientId(medicineLiverDiseaseHistoryDO.getPatientId());
        List<MedicineLiverDiseaseHistoryDetailDTO> medicineLiverDiseaseHistoryDetailDTOS = new ArrayList<>();
        List<MedicineLiverDiseaseHistoryDetailDO> medicineLiverDiseaseHistoryDetailDOS = medicineLiverDiseaseHistoryDO.getMedicineLiverDiseaseHistoryDetailDOS();
        if (!medicineLiverDiseaseHistoryDetailDOS.isEmpty() && medicineLiverDiseaseHistoryDetailDOS != null) {
            for (MedicineLiverDiseaseHistoryDetailDO medicineLiverDiseaseHistoryDetailDO : medicineLiverDiseaseHistoryDetailDOS) {
                MedicineLiverDiseaseHistoryDetailDTO medicineLiverDiseaseHistoryDetailDTO = new MedicineLiverDiseaseHistoryDetailDTO();
                medicineLiverDiseaseHistoryDetailDTO.setCrueDate(medicineLiverDiseaseHistoryDetailDO.getCrueDate());
                medicineLiverDiseaseHistoryDetailDTO.setDiagnosisDate(medicineLiverDiseaseHistoryDetailDO.getDiagnosisDate());
                medicineLiverDiseaseHistoryDetailDTO.setDiseaseName(medicineLiverDiseaseHistoryDetailDO.getDiseaseName());
                medicineLiverDiseaseHistoryDetailDTO.setExistence(medicineLiverDiseaseHistoryDetailDO.getExistence());
                medicineLiverDiseaseHistoryDetailDTO.setMedicineLiverDiseaseHistoryId(medicineLiverDiseaseHistoryDetailDO.getMedicineLiverDiseaseHistoryDO().getId());
                medicineLiverDiseaseHistoryDetailDTOS.add(medicineLiverDiseaseHistoryDetailDTO);
            }
        }
        medicineLiverDiseaseHistoryDTO.setMedicineLiverDiseaseHistoryDetailDTOS(medicineLiverDiseaseHistoryDetailDTOS);
        return medicineLiverDiseaseHistoryDTO;
    }

    @Override
    public MedicineLiverDiseaseHistoryDTO getMlDiseaseHistory(int mlPatientId) {
        return mlDiseaseHistoryRepo.getMlDiseaseHistoryByPatientId(mlPatientId) != null ? convertToDTO(mlDiseaseHistoryRepo.getMlDiseaseHistoryByPatientId(mlPatientId)) : null;
    }

    @Override
    public void saveMlDiseaseHistory(MedicineLiverDiseaseHistoryDTO diseaseHistoryDTO) {
        mlDiseaseHistoryRepo.save(convertToEntity(diseaseHistoryDTO));
    }

    @Override
    public Boolean getCompleteByPatient(int mlPatientId) {
        return mlDiseaseHistoryRepo.getCompleteByPatientId(mlPatientId);
    }
}