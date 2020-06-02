export class ServersService {
    servers1 = [
        {id: 1, name: "Windows", status: "Online"},
        {id: 2, name: "Linux", status: "Offline"},
        {id: 3, name: "IOS", status: "Inactive"}
    ];
    getServers() {
        return this.servers1.slice();
    }
    getServer(id: number) {
        const server = this.servers1.find(
            (s)=> {
              return  s.id === id;
            }
        );
        return server;
    }
    updateServer(id: number, server: {name: string, status: string}) {
        //this.servers1[id]['name'] = server.name;
        //this.servers1[id]['status'] = server.status;
    }
}