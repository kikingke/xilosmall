<template>
    <table id="table" class="table table-striped">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>dorsal</th>
                <th>estado</th>
                <th>foto</th>
                <th>edad</th>
                <th>categoria</th>
                <th>posicion</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Stiven Arias</td>
                <td>11</td>
                <td>Activo</td>
                <td>Url Photo</td>
                <td>32</td>
                <td>lateral izquierdo</td>
                <td>lateral izquierdo</td>
            </tr>
            <tr>
                <td>Stiven Arias</td>
                <td>11</td>
                <td>Activo</td>
                <td>Url Photo</td>
                <td>32</td>
                <td>lateral izquierdo</td>
                <td>lateral izquierdo</td>
            </tr>
            <tr>
                <td>Stiven Arias</td>
                <td>11</td>
                <td>Activo</td>
                <td>Url Photo</td>
                <td>32</td>
                <td>lateral izquierdo</td>
                <td>lateral izquierdo</td>
            </tr>         
        </tbody>
    </table>
</template>

<script>
export default {
    data(){
        return {
            datatable: null
        }
    },
    mounted() {
        this.datatable = $('#table').DataTable();
    },
    // Nombre, dorsal, estado, foto, fnc(para calcular edad), categoria, y posicion.
}
</script>
