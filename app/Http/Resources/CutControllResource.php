<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;

class CutControllResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'fecharegistro' => $this->fecharegistro,
            'cortador' => $this->cortador,
            'lote' => $this->lote,
            'empaque' => Str::lower(
                $this->empaque
            ),
            'product' => Str::lower($this->product),
            'qtyempaque' => $this->qtyempaque,
            'qtybolsa' => $this->qtybolsa,
            'peso_bolsa' => $this->peso_bolsa,
            'total_peso' => $this->total_peso,
            'created_at' => date('Y-m-d H:i:s', strtotime($this->created_at))
        ];
        //parent=>=>toArray($request);
    }

    // 'created_at' => $this->created_at->format('Y-m-d H:i:s')
    //
    // 'updated_at' => $this->updated_at->format('Y-m-d h:m:s'),
    public function with($request)
    {
        return ['res' => true];
    }
}
