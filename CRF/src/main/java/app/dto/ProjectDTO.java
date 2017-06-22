package app.dto;

import java.util.Date;
import java.util.List;

/**
 * Created by 52400 on 2017/6/21.
 */
public class ProjectDTO {

    private Long id;

    private String projectName;//项目名字

    private String organizer;//发起人

    private Date create_time;//创建事件

    private String Introduction;//项目简介

    private List<HospitalDTO> hospitals;

    public List<HospitalDTO> getHospitals() {
        return hospitals;
    }

    public List<ProjectPermissionDTO> currentUserPermissionInProject;//当前用户在当前项目的权限

    public List<ProjectPermissionDTO> getCurrentUserPermissionInProject() {
        return currentUserPermissionInProject;
    }

    public void setCurrentUserPermissionInProject(List<ProjectPermissionDTO> currentUserPermissionInProject) {
        this.currentUserPermissionInProject = currentUserPermissionInProject;
    }

    public void setHospitals(List<HospitalDTO> hospitals) {
        this.hospitals = hospitals;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getOrganizer() {
        return organizer;
    }

    public void setOrganizer(String organizer) {
        this.organizer = organizer;
    }

    public Date getCreate_time() {
        return create_time;
    }

    public void setCreate_time(Date create_time) {
        this.create_time = create_time;
    }

    public String getIntroduction() {
        return Introduction;
    }

    public void setIntroduction(String introduction) {
        Introduction = introduction;
    }
}