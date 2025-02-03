from typing import List, Dict
from pydantic import BaseModel
from .image import DockerConfig


class TerminalOption(BaseModel):
    haveColor: bool = False
    pty: bool = True


class EventTask(BaseModel):
    autoStart: bool = False
    autoRestart: bool = True
    ignore: bool = False


class PingConfig(BaseModel):
    ip: str = ""
    port: int = 25565
    type: int = 1


class InstanceConfig(BaseModel):
    nickname: str = "New Name"
    startCommand: str = "cmd.exe"
    stopCommand: str = "^C"
    cwd: str = ""
    ie: str = "gbk"  # 输入编码
    oe: str = "gbk"  # 输出编码
    createDatetime: int = 0
    lastDatetime: int = 0
    type: str = "universal"
    tag: List[str] = []
    endTime: int = 0
    fileCode: str = "gbk"
    processType: str = "docker"
    updateCommand: str = "shutdown -s"
    actionCommandList: List[str] = []
    crlf: int = 2
    docker: "DockerConfig" = DockerConfig()
    enableRcon: bool = True
    rconPassword: str = ""
    rconPort: int = 2557
    rconIp: str = ""
    terminalOption: TerminalOption = TerminalOption()
    eventTask: EventTask = EventTask()
    pingConfig: PingConfig = PingConfig()



class ProcessInfo(BaseModel):
    cpu: int = 0
    memory: int = 0
    ppid: int = 0
    pid: int = 0
    ctime: int = 0
    elapsed: int = 0
    timestamp: int = 0


class InstanceInfo(BaseModel):
    currentPlayers: int = -1
    fileLock: int = 0
    maxPlayers: int = -1
    openFrpStatus: bool = False
    playersChart: List[Dict] = []
    version: str = ""


class InstanceDetail(BaseModel):
    config: InstanceConfig = InstanceConfig()
    info: InstanceInfo = InstanceInfo()
    instanceUuid: str = ""
    processInfo: ProcessInfo = ProcessInfo()
    space: int = 0
    started: int = 0  # 启动次数
    status: int = 0  # -1 = 忙碌, 0 = 停止, 1 = 停止中, 2 = 启动中, 3 = 运行中



class InstanceCreateResult(BaseModel):
    instanceUuid: str = ""
    config: InstanceConfig = InstanceConfig()



class InstanceSearchList(BaseModel):
    pageSize: int = 0
    maxPage: int = 0
    data: List[InstanceDetail] = []



class UserInstancesList(BaseModel):
    instanceUuid: str = ""
    daemonId: str = ""
